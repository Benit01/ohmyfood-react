import Image from "next/image";
import { notFound } from "next/navigation";
import data from "@/data/restaurants.json";
import RestaurantHeader from "@/components/RestaurantHeader/RestaurantHeader";
import MenuItem from "@/components/MenuItem/MenuItem";

const { restaurants } = data;

export default async function RestaurantPage({ params }) {
  // Les params sont asynchrones depuis Next.js 15
  const { slug } = await params;
  const restaurant = restaurants.find((restaurant) => restaurant.slug === slug);

  // Slug inconnu : on affiche la page 404 (app/not-found.jsx)
  if (!restaurant) {
    notFound();
  }

  const { name, image, menu } = restaurant;

  return (
    <>
      <div className="heroImage">
        <Image src={image} alt={name} fill priority sizes="100vw" className="image" />
      </div>

      <div className="mainWrapper">
        <div className="contentWrapper">
          <RestaurantHeader name={name} />

          <div className="menu">
            {Object.entries(menu).map(([section, items]) => (
              <section key={section}>
                <h3 className="sectionTitle">{section}</h3>
                {items.map((item, index) => (
                  <MenuItem key={item.nom} item={item} index={index} />
                ))}
              </section>
            ))}
          </div>

          <button className="orderButton">Commander</button>
        </div>
      </div>
    </>
  );
}
