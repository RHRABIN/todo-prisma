import catchAsync from "../../../shared/carchAsync";
import sendResponse from "../../../shared/sendResponse";
import { DataService } from "./data.service";


const createData = catchAsync(async (req, res) => {
    const { ...data } = req.body;
    const result = await DataService.createData(data);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        data: result
    })
})
const getAllData = catchAsync(async (req, res) => {
    const result = await DataService.getAllData();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        data: result
    })
});
const getData = catchAsync(async (req, res) => {
    const id = parseInt(req.params.id);
    const result = await DataService.getData(id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        data: result
    })
});

export const DataController = {
    getAllData,
    createData,
    getData
}