import { ObjectId } from "mongodb";
import { conection } from "../database/config.js";

export const endpoint1 = async (req, res) => {
    try {
        const endpoint = (await conection()).Medicamentos
        const result = await endpoint.find({ stock: { $lt: 50 } }).toArray();
        res.json(result);
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint2 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
        
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint3 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint4 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint5 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint6 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint7 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint8 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint9 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint10 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint11 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint12 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint13 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint14 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint15 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint16 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint17 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint18 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint19 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint20 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}

export const endpoint21 = async (req, res) => {
    try {
        //const endpoint = (await conection()).Compras
    
    } catch (error) {
        throw "eso no sirve";
    }
}