import express, { Router, Request, Response } from "express";
import { oilyFoods } from "../api/food/oily";
import { breakfastFoods } from "../api/food/breakfast";
const productsRouter: Router = express.Router();

productsRouter.get("/oily-foods/", (req: Request, res: Response) => {
  const page =parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 30;
  const startIndex = (page -1 ) * limit;
  const endIndex = page * limit;
  const paginationFood = oilyFoods.slice(startIndex, endIndex);
  res.status(200).json({
    page,
    limit,
    total:oilyFoods.length,
    totalPages: Math.ceil(oilyFoods.length / limit),
    data: paginationFood
  });
  return;
});

productsRouter.get("filter-by-time", (req:Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 30;

})

productsRouter.get("/break-fast-foods", (req:Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 30;
  const startIndex = (page -1 ) * limit;
  const endIndex = page * limit;
  const paginationFood = breakfastFoods.slice(startIndex, endIndex);
  res.status(200).json({
    page,
    limit,
    total:oilyFoods.length,
    totalPages: Math.ceil(oilyFoods.length / limit),
    data: paginationFood
  });
  return;

})



export default productsRouter;
