//Crear exp
//Encontrar exp
//Editar exp
//Eliminar exp
//Mostrar lista de exp

import Experience from "../models/experienceModel";

async function listExperience (req, res) {
    try{
        const userexperience = await Experience.find();
        res.json(userexperience);
    } catch (error){
        res.status(500).json("The server had an error");
    }
}

async function findExperience (req, res) {
    try{
        const experienceid = req.params.id;
        const foundexperience = await Experience.findById(experienceid);
        res.json(foundexperience);
    } catch (error){
        res.status(500).json("The server had an error");
    }
}

async function createExperience (req, res) {
    try{
        const experienceid = req.params.id;
        const foundexperience = await Experience.findById(experienceid);
        res.json(foundexperience);
    } catch (error){
        res.status(500).json("The server had an error");
    }
}

async function editExperience (req, res){
    try{
        const foundexperience = await Experience.findById(req.params.id);

        foundexperience.name = req.body.name ?? foundexperience.name;
        foundexperience.place = req.body.place ?? foundexperience.place;
        foundexperience.price = req.body.price ?? foundexperience.price;

        await foundexperience.save();
        res.json(foundexperience);

    } catch (error){
        res.status(500).json("The server had an error");
    }
}

async function deleteExperience (req, res){
    try{
        const foundexperience = await Experience.findByIdandDelete(req.params.id);
        res.json("the user was deleted");

    } catch (error){
        res.status(500).json("The server had an error");
    }
}

export default {
    listExperience,
    findExperience,
    createExperience,
    editExperience,
    deleteExperience,
}