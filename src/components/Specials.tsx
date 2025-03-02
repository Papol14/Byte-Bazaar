import { motion } from "framer-motion";

const Specials = () => {
  return (
    <div className="flex justify-between lg:justify-around items-center py-8 md:px-20 px-10 xs:flex-col text-gray-600">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center p-2"
      >
        <h2 className="text-4xl font-bold text-gray-800">500+</h2>
        <p className="text-gray-500">Side Hustle Products</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center p-2"
      >
        <h2 className="text-4xl font-bold text-gray-800">108</h2>
        <p className="text-gray-500">Products Sold</p>
      </motion.div>
    </div>
  );
};

export default Specials;
