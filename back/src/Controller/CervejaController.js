import CervejaSchema from '../Schema/CervejaSchema';
import CervejaModel from '../Database/CervejaModel';
import ProducaoModel from '../Database/ProducaoModel';

class CervejaController {
    async index(req, res){
        const cervejas = await CervejaModel.findAll({
            include: [{
                model: ProducaoModel,
                attributes: ["regiao_fabricada"]

                // model: CervejaModel,
                // attributes: ["nome" ],
                // as: "cerveja_producao"

            }]
        }).catch(error => console.log(error));
        console.log(cervejas)
        return res.json(cervejas);

        // const cervejas = await CervejaSchema.find().catch(error => console.log(error));
        // console.log(`As cervejas: ${cervejas} estão no banco de dados`)
        // return res.json(cervejas);

    } 
    async create(req, res){
        const { nome, tipo } = req.body;
        console.log(`A cerveja ${nome} foi adicionada ao banco de dados`)
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
    async deletar(req, res){
        const { id } = req.params;
        console.log(`A cerveja com id ${id} foi apagada do banco de dados`);
        res.send(`A cerveja com id ${id} foi apagada do banco de dados`)
        await CervejaSchema.deleteOne({_id: id});
    }
    async updatar(req, res){
        const {id} = req.params;
        const {nome, tipo} = req.body;
        const cerveja = await CervejaSchema.findByIdAndUpdate({_id: id}, {nome, tipo}, {new: true});
        console.log(`A cerveja com id: ${id} foi alterada para ${nome}, ${tipo}`);
        res.json(cerveja);
    }
}

export default new CervejaController();