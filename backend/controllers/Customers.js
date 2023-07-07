import Customer from "../models/CustomerModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getCustomers = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Customer.findAll({
                attributes:['uuid','komer','namer','alamer','provinsi','kota','kecamatan','telp','emailCus','pic','koordinat'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Customer.findAll({
                attributes:['uuid','komer','namer','alamer','provinsi','kota','kecamatan','telp','emailCus','pic','koordinat'],
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

export const getCustomerById = async(req, res) => {
    try {
        const customer = await Customer.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!customer) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Customer.findOne({
                attributes:['uuid','komer','namer','alamer','provinsi','kota','kecamatan','telp','emailCus','pic','koordinat'],
                where:{
                    id: customer.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Customer.findOne({
                attributes:['uuid','komer','namer','alamer','provinsi','kota','kecamatan','telp','emailCus','pic','koordinat'],
                where:{
                    [Op.and]:[{id: customer.id}, {userId: req.userId}]
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

export const createCustomer = async(req, res) => {
    const {komer, namer, alamer, provinsi, kota, kecamatan, telp, emailCus, pic, koordinat} = req.body;
    try {
        await Customer.create({
            komer: komer,
            namer: namer,
            alamer: alamer,
            provinsi: provinsi,
            kota: kota,
            kecamatan: kecamatan,
            telp: telp,
            emailCus: emailCus,
            pic: pic,
            koordinat: koordinat,
            userId: req.userId
        });
        res.status(201).json({msg: "Customer Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateCustomer = async(req, res) => {
    try {
        const customer = await Customer.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!customer) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {komer, namer, alamer, provinsi, kota, kecamatan, telp, emailCus, pic, koordinat} = req.body;
        if(req.role === "admin"){
            await Customer.update({komer, namer, alamer, provinsi, kota, kecamatan, telp, emailCus, pic, koordinat},{
                where:{
                    id: customer.id
                }
            });
        }else{
            if(req.userId !== customer.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Customer.update({komer, namer, alamer, provinsi, kota, kecamatan, telp, emailCus, pic, koordinat},{
                where:{
                    [Op.and]:[{id: customer.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Customer updated successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteCustomer = async(req, res) => {
    try {
        const customer = await Customer.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!customer) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {komer, namer, alamer, provinsi, kota, kecamatan, telp, emailCus, pic, koordinat} = req.body;
        if(req.role === "admin"){
            await Customer.destroy({
                where:{
                    id: customer.id
                }
            });
        }else{
            if(req.userId !== customer.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Customer.destroy({
                where:{
                    [Op.and]:[{id: customer.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Customer deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}
