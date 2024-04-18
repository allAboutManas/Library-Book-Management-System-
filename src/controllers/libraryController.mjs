import LibraryModel from "../modals/LibraryModel.mjs";


const addBooks= async (req,res)=>{
    const data = req.body;

    const createdBooks= await LibraryModel.create(data)
    res.status(201).send({ status:"Book Added Successfully",message:createdBooks})

}

const findBooks=async(req,res)=>{
   

    const books=await LibraryModel.find();
    res.status(200).send({ status:"Array of books matching the search criteria",message:books})
      


}



export{addBooks,findBooks};