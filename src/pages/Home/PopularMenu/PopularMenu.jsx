import { useEffect, useState } from "react";
import SectionTitel from "../../Componet/SectionTitel/SectionTitel";
import Menuitem from '../../../Shared/MenuItem/MenuItem'

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect( () => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItem = data.filter(item => item.category === 'popular')
        setMenu(popularItem)})
  }, [])
  return (
    <section className="container mx-auto my-12">
      <SectionTitel
        Heading="FROM OUR MENU"
        Subheading="Check it out"
      ></SectionTitel>
      <div className="grid md:grid-cols-2 gap-10">
        {
          menu.map(item => <Menuitem
            key={item._id}
            item={item}
          ></Menuitem>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;