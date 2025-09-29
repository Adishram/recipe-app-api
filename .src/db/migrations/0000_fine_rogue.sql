CREATE TABLE "favourites" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"recipe_id" integer NOT NULL,
	"title" text,
	"image" text,
	"cook_time" text,
	"servings" text,
	"createdAt" timestamp DEFAULT now()
);
