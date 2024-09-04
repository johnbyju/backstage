import * as z from "zod"
import Category from "./database/models/category.model"


export const eventformSchema = z.object({
    title:z.string().min(3,'Title must be at least 3 characters'),
    description:z.string().min(10,'Description must be at least 10 Characters').max(400,'Description must be less than 400 characters'),
    location :z.string().min(3,'Location must be at least 3 characters').max(250,'Location must be less than 400 characters'),
    imageUrl :z.string(),
    startDateTime :z.date(),
    endDateTime:z.date(),
    categoryId:z.string(),
    price :z.string(),
    isFree:z.boolean(),
    url :z.string().url()

})