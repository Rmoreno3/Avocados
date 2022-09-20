import Database from '@/database'

const allAvos = async (req, res) => {
  const data = await Database.getAll();
  res.status(200).json({ length:data.length, data});
};

export default allAvos;