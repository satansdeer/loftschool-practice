import React from "react";
import { Route, Link, Switch } from "react-router-dom";

const categories = [
  { id: 0, title: "Категория", subcategories: [1, 2, 3] },
  { id: 1, title: "Подкатегория 1", subcategories: [4] },
  { id: 2, title: "Подкатегория 2", subcategories: [4] },
  { id: 3, title: "Подкатегория 3", subcategories: [4] },
  { id: 4, title: "Под-подкатегория", subcategories: [5] },
  { id: 5, title: "Под-под-подкатегория", subcategories: [6] },
  { id: 6, title: "Под-под-под-подкатегория", subcategories: [] }
];

const Category = ({ match }) => {
  console.log(match.path);
  const category = categories.find(category => {
    return parseInt(match.params.catId) === category.id;
  });
  return (
    <>
      {match.isExact && (
        <>
          <h1>
            {category.title} + {String(match.isExact)}
          </h1>
          {category.subcategories.map(subCategoryId => {
            return (
              <Link to={`${match.url}/${subCategoryId}`}>
                Подкатегория {subCategoryId}
              </Link>
            );
          })}
        </>
      )}
      <Switch>
        <Route path={`${match.path}/:catId`} component={Category} />
      </Switch>
    </>
  );
};

export default RoutingExample = () => {
  return (
    <Switch>
      <Route path={`/categories/:catId`} component={Category} />
    </Switch>
  );
};