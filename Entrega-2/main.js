const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("productos.json");

const main = async () => {
  const id1 = await contenedor.save({ title: "Jersey San Jose Sharks", price: 258 });
  const id2 = await contenedor.save({ title: "Jersey Colorado", price: 320 });
  const id3 = await contenedor.save({ title: "Jersey Tampa", price: 358 });

  console.log(id1, id2, id3);

  const object2 = await contenedor.getById(2);
  console.log(object2); 

  await contenedor.deleteById(2);

  const allCurrentObjects = await contenedor.getAll();
  console.log(allCurrentObjects);
 
};

main();