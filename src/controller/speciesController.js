import Species from '../models/speciesModels.js'

export const store = async (req, res) => {
    try{    
        const species = await Species.create(req.body)
        return res.status(201).json(species)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}

export const index = async (req, res) => {
    try{    
        const species = await Species.find().exec()
        return res.status(201).json(species)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}

export const update = async (req, res) => {
    try{    
        const species = await Species.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(201).json(species)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}

export const destroy = async (req, res) => {
    try{    
        const species = await Species.findByIdAndDelete(req.params.id).exec()
        return res.status(201).json(species)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
}