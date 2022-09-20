import Database from '@/database'

const allAvos = async (req, res) => {
  const id = req.query.id;
  const data = await Database.getById(id);
  res.status(200).json(data);
};

export default allAvos;