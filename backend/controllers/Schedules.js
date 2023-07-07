import Schedule from "../models/ScheduleModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getSchedules = async(req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Schedule.findAll({
                attributes:['uuid','nodok','taren','tadib','komer','kowil','supir','idken','product','qty','kobar','keterangan'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Schedule.findAll({
                attributes:['uuid','nodok','taren','tadib','komer','kowil','supir','idken','product','qty','kobar','keterangan'],
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

export const getScheduleById = async(req, res) =>{
    try {
        const schedule = await Schedule.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!schedule) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Schedule.findOne({
                attributes:['uuid','nodok','taren','tadib','komer','kowil','supir','idken','product','qty','kobar','keterangan'],
                where:{
                    id: schedule.id
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Schedule.findOne({
                attributes:['uuid','nodok','taren','tadib','komer','kowil','supir','idken','product','qty','kobar','keterangan'],
                where:{
                    [Op.and]:[{id: schedule.id}, {userId: req.userId}]
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

export const createSchedule = async(req, res) =>{
    const {nodok, taren, tadib, komer, kowil, supir, idken, product, qty, kobar, keterangan} = req.body;
    try {
        await Schedule.create({
            nodok: nodok,
            taren: taren,
            tadib: tadib,
            komer: komer,
            kowil: kowil,
            supir: supir,
            idken: idken,
            product: product,
            qty: qty,
            kobar: kobar,
            keterangan: keterangan,
            userId: req.userId
        });
        res.status(201).json({msg: "Schedule Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateSchedule = async(req, res) =>{
    try {
        const schedule = await Schedule.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!schedule) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {nodok, taren, tadib, komer, kowil, supir, idken, product, qty, kobar, keterangan} = req.body;
        if(req.role === "admin"){
            await Schedule.update({nodok, taren, tadib, komer, kowil, supir, idken, product, qty, kobar, keterangan},{
                where:{
                    id: schedule.id
                }
            });
        }else{
            if(req.userId !== schedule.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Schedule.update({nodok, taren, tadib, komer, kowil, supir, idken, product, qty, kobar, keterangan},{
                where:{
                    [Op.and]:[{id: schedule.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Product Updated Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteSchedule = async(req, res) =>{
    try {
        const schedule = await Schedule.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!schedule) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {nodok, taren, tadib, komer, kowil, supir, idken, product, qty, kobar, keterangan} = req.body;
        if(req.role === "admin"){
            await Schedule.destroy({
                where:{
                    id: schedule.id
                }
            });
        }else{
            if(req.userId !== schedule.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Schedule.destroy({
                where:{
                    [Op.and]:[{id: schedule.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}