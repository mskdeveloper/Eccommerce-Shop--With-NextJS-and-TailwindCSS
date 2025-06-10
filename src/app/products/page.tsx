import { prisma } from "@/lib/prisma";
import React from "react";

const page = async () => {
  const data = await prisma.product.findMany();
  console.log(data);
  return (
    <div>
      <h2>products:</h2>
    </div>
  );
};

export default page;
