import React from "react";
import { useParams } from "react-router-dom";

import RecipeList from "../components/RecipeList";

const DUMMY_RECIPES = [
  {
    id: "r1",
    imageUrl:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/03/green-goddess-smoothie-bowl.jpg?itok=j-hSA5Kf",
    title: "Green Goddess Smothie Bowl",
    ingredients: [
      "2 bananas",
      "1 ripe avocado",
      "1 small ripe mango",
      "100g spinach",
      "250ml milk",
      "1 tbsp unsweetened almond or peanut butter",
      "1 tbsp clear honey, agave or maple syrup",
    ],
    steps: [
      "Slice the bananas and arrange over a small baking tray lined with parchment. Freeze for 2 hrs until solid. (You can now transfer the banana slices to a freezer bag and freeze for 3 months, or continue with the recipe.)",
      "For the seed mix, heat oven to 180C/160C fan/gas 4 and line a baking tray with parchment. Tip the seeds, coconut and almonds into a bowl, add the cinnamon and drizzle over the honey, agave or maple syrup. Toss until everything is well coated, then scatter over the baking tray in an even layer. Bake for 10-15 mins, stirring every 5 mins or so, until the seeds are lightly toasted. Leave to cool. Will keep in an airtight container for up to 1 month.",
      "Put the avocado, mango, spinach, milk, nut butter, frozen banana slices and honey (if using) in a blender and whizz to a thick smoothie consistency – you may have to scrape down the sides with a spoon a few times. Divide between two bowls and arrange the fruit on top. Scatter 1-2 tbsp of the seed mix over each bowl and eat straight away.",
    ],
    creator: "u1",
    creationDate: "29/07/2020",
    creatorName: "Victor"
  },
  {
    id: "r2",
    imageUrl:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/03/green-goddess-smoothie-bowl.jpg?itok=j-hSA5Kf",
    title: "Green Goddess Smothie Bowl",
    ingredients: [
      "2 bananas",
      "1 ripe avocado",
      "1 small ripe mango",
      "100g spinach",
      "250ml milk",
      "1 tbsp unsweetened almond or peanut butter",
      "1 tbsp clear honey, agave or maple syrup",
    ],
    steps: [
      "Slice the bananas and arrange over a small baking tray lined with parchment. Freeze for 2 hrs until solid. (You can now transfer the banana slices to a freezer bag and freeze for 3 months, or continue with the recipe.)",
      "For the seed mix, heat oven to 180C/160C fan/gas 4 and line a baking tray with parchment. Tip the seeds, coconut and almonds into a bowl, add the cinnamon and drizzle over the honey, agave or maple syrup. Toss until everything is well coated, then scatter over the baking tray in an even layer. Bake for 10-15 mins, stirring every 5 mins or so, until the seeds are lightly toasted. Leave to cool. Will keep in an airtight container for up to 1 month.",
      "Put the avocado, mango, spinach, milk, nut butter, frozen banana slices and honey (if using) in a blender and whizz to a thick smoothie consistency – you may have to scrape down the sides with a spoon a few times. Divide between two bowls and arrange the fruit on top. Scatter 1-2 tbsp of the seed mix over each bowl and eat straight away.",
    ],
    creator: "u2",
    creationDate: "29/07/2020",
    creatorName: "Victor"
  },
  {
    id: "r3",
    imageUrl:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/03/green-goddess-smoothie-bowl.jpg?itok=j-hSA5Kf",
    title: "Green Goddess Smothie Bowl",
    ingredients: [
      "2 bananas",
      "1 ripe avocado",
      "1 small ripe mango",
      "100g spinach",
      "250ml milk",
      "1 tbsp unsweetened almond or peanut butter",
      "1 tbsp clear honey, agave or maple syrup",
    ],
    steps: [
      "Slice the bananas and arrange over a small baking tray lined with parchment. Freeze for 2 hrs until solid. (You can now transfer the banana slices to a freezer bag and freeze for 3 months, or continue with the recipe.)",
      "For the seed mix, heat oven to 180C/160C fan/gas 4 and line a baking tray with parchment. Tip the seeds, coconut and almonds into a bowl, add the cinnamon and drizzle over the honey, agave or maple syrup. Toss until everything is well coated, then scatter over the baking tray in an even layer. Bake for 10-15 mins, stirring every 5 mins or so, until the seeds are lightly toasted. Leave to cool. Will keep in an airtight container for up to 1 month.",
      "Put the avocado, mango, spinach, milk, nut butter, frozen banana slices and honey (if using) in a blender and whizz to a thick smoothie consistency – you may have to scrape down the sides with a spoon a few times. Divide between two bowls and arrange the fruit on top. Scatter 1-2 tbsp of the seed mix over each bowl and eat straight away.",
    ],
    creator: "u2",
    creationDate: "29/07/2020",
    creatorName: "Victor"
  },
  {
    id: "r4",
    imageUrl:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/03/green-goddess-smoothie-bowl.jpg?itok=j-hSA5Kf",
    title: "Green Goddess Smothie Bowl",
    ingredients: [
      "2 bananas",
      "1 ripe avocado",
      "1 small ripe mango",
      "100g spinach",
      "250ml milk",
      "1 tbsp unsweetened almond or peanut butter",
      "1 tbsp clear honey, agave or maple syrup",
    ],
    steps: [
      "Slice the bananas and arrange over a small baking tray lined with parchment. Freeze for 2 hrs until solid. (You can now transfer the banana slices to a freezer bag and freeze for 3 months, or continue with the recipe.)",
      "For the seed mix, heat oven to 180C/160C fan/gas 4 and line a baking tray with parchment. Tip the seeds, coconut and almonds into a bowl, add the cinnamon and drizzle over the honey, agave or maple syrup. Toss until everything is well coated, then scatter over the baking tray in an even layer. Bake for 10-15 mins, stirring every 5 mins or so, until the seeds are lightly toasted. Leave to cool. Will keep in an airtight container for up to 1 month.",
      "Put the avocado, mango, spinach, milk, nut butter, frozen banana slices and honey (if using) in a blender and whizz to a thick smoothie consistency – you may have to scrape down the sides with a spoon a few times. Divide between two bowls and arrange the fruit on top. Scatter 1-2 tbsp of the seed mix over each bowl and eat straight away.",
    ],
    creator: "u1",
    creationDate: "29/07/2020",
    creatorName: "Victor"
  },
  {
    id: "r5",
    imageUrl:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/03/green-goddess-smoothie-bowl.jpg?itok=j-hSA5Kf",
    title: "Green Goddess Smothie Bowl",
    ingredients: [
      "2 bananas",
      "1 ripe avocado",
      "1 small ripe mango",
      "100g spinach",
      "250ml milk",
      "1 tbsp unsweetened almond or peanut butter",
      "1 tbsp clear honey, agave or maple syrup",
    ],
    steps: [
      "Slice the bananas and arrange over a small baking tray lined with parchment. Freeze for 2 hrs until solid. (You can now transfer the banana slices to a freezer bag and freeze for 3 months, or continue with the recipe.)",
      "For the seed mix, heat oven to 180C/160C fan/gas 4 and line a baking tray with parchment. Tip the seeds, coconut and almonds into a bowl, add the cinnamon and drizzle over the honey, agave or maple syrup. Toss until everything is well coated, then scatter over the baking tray in an even layer. Bake for 10-15 mins, stirring every 5 mins or so, until the seeds are lightly toasted. Leave to cool. Will keep in an airtight container for up to 1 month.",
      "Put the avocado, mango, spinach, milk, nut butter, frozen banana slices and honey (if using) in a blender and whizz to a thick smoothie consistency – you may have to scrape down the sides with a spoon a few times. Divide between two bowls and arrange the fruit on top. Scatter 1-2 tbsp of the seed mix over each bowl and eat straight away.",
    ],
    creator: "u1",
    creationDate: "29/07/2020",
    creatorName: "Victor"
  },
  {
    id: "r6",
    imageUrl:
      "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/03/green-goddess-smoothie-bowl.jpg?itok=j-hSA5Kf",
    title: "Green Goddess Smothie Bowl",
    ingredients: [
      "2 bananas",
      "1 ripe avocado",
      "1 small ripe mango",
      "100g spinach",
      "250ml milk",
      "1 tbsp unsweetened almond or peanut butter",
      "1 tbsp clear honey, agave or maple syrup",
    ],
    steps: [
      "Slice the bananas and arrange over a small baking tray lined with parchment. Freeze for 2 hrs until solid. (You can now transfer the banana slices to a freezer bag and freeze for 3 months, or continue with the recipe.)",
      "For the seed mix, heat oven to 180C/160C fan/gas 4 and line a baking tray with parchment. Tip the seeds, coconut and almonds into a bowl, add the cinnamon and drizzle over the honey, agave or maple syrup. Toss until everything is well coated, then scatter over the baking tray in an even layer. Bake for 10-15 mins, stirring every 5 mins or so, until the seeds are lightly toasted. Leave to cool. Will keep in an airtight container for up to 1 month.",
      "Put the avocado, mango, spinach, milk, nut butter, frozen banana slices and honey (if using) in a blender and whizz to a thick smoothie consistency – you may have to scrape down the sides with a spoon a few times. Divide between two bowls and arrange the fruit on top. Scatter 1-2 tbsp of the seed mix over each bowl and eat straight away.",
    ],
    creator: "u1",
    creationDate: "29/07/2020",
    creatorName: "Victor"
  },
];

const UserRecipes = () => {
  const userId = useParams().userId;
  const loadedRecipes = DUMMY_RECIPES.filter(recipe => recipe.creator === userId);
  return <RecipeList items={loadedRecipes} />;
};

export default UserRecipes;
