import Lokasi from "../models/LokasiModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getLokasis = async(req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Lokasi.findAll({
                attributes:['uuid','komat','komer','alamat','keterangan','aktivasi'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Lokasi.findAll({
                attributes:['uuid','komat','komer','alamat','keterangan','aktivasi'],
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getLokasiById = async(req, res) =>{
    try {
        const lokasi = await Lokasi.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!lokasi) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Lokasi.findOne({
                attributes:['uuid','komat','komer','alamat','keterangan','aktivasi'],
                where:{
                    id: lokasi.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Lokasi.findOne({
                attributes:['uuid','komat','komer','alamat','keterangan','aktivasi'],
                where:{
                    [Op.and]:[{id: lokasi.id}, {userId: req.userId}]
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createLokasi = async(req, res) =>{
    const {name, komat, komer, alamat, keterangan, aktivasi} = req.body;
    try {
        await Lokasi.create({
            name: name,
            komat: komat,
            komer: komer,
            alamat: alamat,
            keterangan: keterangan,
            aktivasi: aktivasi,
            userId: req.userId
        });
        res.status(201).json({msg: "Alamat Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateLokasi = async(req, res) =>{
    try {
        const lokasi = await Lokasi.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!lokasi) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {komat, komer, alamat, keterangan, aktivasi} = req.body;
        if(req.role === "admin"){
            await Lokasi.update({komat, komer, alamat, keterangan, aktivasi},{
                where:{
                    id: lokasi.id
                }
            });
        }else{
            if(req.userId !== lokasi.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Lokasi.update({komat, komer, alamat, keterangan, aktivasi},{
                where:{
                    [Op.and]:[{id: lokasi.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Alamat Updated Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteLokasi = async(req, res) =>{
    try {
        const lokasi = await Lokasi.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!lokasi) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {komat, komer, alamat, keterangan, aktivasi} = req.body;
        if(req.role === "admin"){
            await Lokasi.destroy({
                where:{
                    id: lokasi.id
                }
            });
        }else{
            if(req.userId !== lokasi.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Lokasi.destroy({
                where:{
                    [Op.and]:[{id: lokasi.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Alamat Deleted Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}