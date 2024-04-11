import React, { useEffect, useState } from "react";

function Coba1() {
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    // Mengatur timer untuk mengubah showDiv menjadi false setelah 3 detik
    const timer = setTimeout(() => {
      setShowDiv(false);
    }, 2000); // 3000 milidetik = 3 detik

    // Membersihkan timer saat komponen dilepas
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="border-[1px] border-black h-screen">
      <h1>HELLO WORLD</h1>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas nulla
        possimus eaque molestias consequatur praesentium obcaecati suscipit,
        neque ullam delectus voluptatem corrupti ex quasi cumque porro molestiae
        magni error doloremque pariatur? Deserunt similique est fugiat eum quam
        reiciendis consequatur delectus?
      </p>

      {showDiv && <div className="bg-blue-500 w-full h-[200px]"></div>}
    </div>
  );
}

export default Coba1;
