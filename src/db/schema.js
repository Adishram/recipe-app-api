import { pgTable,serial,text,timestamp,integer } from "drizzle-orm/pg-core";

export const favoritesTable = pgTable("favourites",{
    id : serial("id").primaryKey(),
    userId : text("user_id").notNull(),
    recipeId : integer("recipe_id").notNull(),
    title : text("title"),
    image : text("image"),
    cookTime : text("cook_time"),
    servings : text("servings"),
    createdAt : timestamp("createdAt").defaultNow(),
})