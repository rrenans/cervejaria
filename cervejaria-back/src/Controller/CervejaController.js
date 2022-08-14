import CervejaSchema from '../Schema/CervejaSchema';

class CervejaController {
    async index(req, res){
        const cervejas = await CervejaSchema.find().catch(error => console.log(error));
        console.log(cervejas);

        return res.json(cervejas);
    } 
    async create(req, res){
        const { nome, tipo } = req.body;
        console.log(nome);
        await CervejaSchema.create(
            {
                nome,
                tipo
            }
        ).catch(error => {
            console.log(error);
        });
        return res.json({nome, tipo});
    }
}

export default new CervejaController();