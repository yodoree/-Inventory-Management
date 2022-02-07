import Product from "../models/Product";

export const home = async (req, res) => {
  const products = await Product.find({});
  return res.render("home", { products });
};

export const search = async (req, res) => {
  const { term } = req.query;
  let products = [];

  if (term === "") {
    const products = await Product.find({});
    return res.render("home", { products });
  }

  if (term) {
    products = await Product.find({
      title: {
        $regex: new RegExp(`${term}`, "i"),
      },
    });
  }
  return res.render("product/search", { pageTitle: "Search", products });
};

export const productView = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById({ _id: id });
  return res.render("product/view", { product });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById({ _id: id });
  return res.render("product/edit", { product });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, count } = req.body;
  const { file } = req;
  const product = await Product.exists({ _id: id });
  if (!product) {
    return res.sendStatus("404");
  }

  await Product.findByIdAndUpdate(id, {
    imageUrl: file.path,
    title,
    count,
  });

  return res.redirect("/");
};

export const getUpload = (req, res) => res.render("product/upload");

export const postUpload = async (req, res) => {
  const { title, count } = req.body;
  const { file } = req;

  try {
    await Product.create({
      imageUrl: file.path,
      title,
      count,
    });
    return res.redirect("/");
  } catch (error) {
    return res.sendStatus(404);
  }
};

export const getDelete = async (req, res) => {
  const { id } = req.params;
  await Product.deleteOne({ _id: id });

  return res.redirect("/");
};
