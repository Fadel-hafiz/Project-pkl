import Products from "../models/ProductModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getProducts = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Products.findAll({
        attributes: [
          "uuid",
          "kodprod",
          "namprod",
          "partname",
          "partkode",
          "aktivasi",
          "keterangan",
          "photo",
        ],
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Products.findAll({
        attributes: [
            "uuid",
            "kodprod",
            "namprod",
            "partname",
            "partkode",
            "aktivasi",
            "keterangan",
            "photo",
        ],
        where: {
          userId: req.userId,
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Products.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    let response;
    if (req.role === "admin") {
      response = await Products.findOne({
        attributes: [
            "uuid",
            "kodprod",
            "namprod",
            "partname",
            "partkode",
            "aktivasi",
            "keterangan",
            "photo",
        ],
        where: {
          id: driver.id,
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Products.findOne({
        attributes: [
            "uuid",
            "kodprod",
            "namprod",
            "partname",
            "partkode",
            "aktivasi",
            "keterangan",
            "photo",
        ],
        where: {
          [Op.and]: [{ id: product.id }, { userId: req.userId }],
        },
        include: [
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const {
    kodprod,
    namprod,
    partname,
    partkode,
    aktivasi,
    keterangan,
    photo,
  } = req.body;

  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });

  const files = {};
  for (let file of req.files) {
    files[file.fieldname] = file.filename;
  }

  const data = await Products.create({
    kodprod: kodprod,
    namprod: namprod,
    partname: partname,
    partkode: partkode,
    aktivasi: aktivasi,
    keterangan: keterangan,
    photo: photo,
    userId: req.userId,
    ...files,
  });

  res.json(data);
};

export const updateProduct = async (req, res) => {
  const {
    kodprod,
    namprod,
    partname,
    partkode,
    aktivasi,
    keterangan,
    photo,
  } = req.body;

  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });

  const files = {};
  for (let file of req.files) {
    files[file.fieldname] = file.filename;
  }

  const data = await Products.update({
    kodprod: kodprod,
    namprod: namprod,
    partname: partname,
    partkode: partkode,
    aktivasi: aktivasi,
    keterangan: keterangan,
    photo: photo,
    userId: req.userId,
    ...files,
  });

  res.json(data);
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Products.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!product) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const {
      uuid,
      kodprod,
      namprod,
      partname,
      partkode,
      aktivasi,
      keterangan,
      photo,
    } = req.body;
    if (req.role === "admin") {
      await Products.destroy({
        where: {
          id: product.id,
        },
      });
    } else {
      if (req.userId !== product.userId)
        return res.status(403).json({ msg: "Akses terlarang" });
      await Products.destroy({
        where: {
          [Op.and]: [{ id: product.id }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "Products deleted successfuly" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};