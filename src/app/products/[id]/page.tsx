import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const path = await params;
  console.log(path);
  return (
    <div>
      <h3>product id :{path.id}</h3>
    </div>
  );
};

export default page;
