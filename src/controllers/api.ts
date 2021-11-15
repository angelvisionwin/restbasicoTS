import { response, request } from 'express';

export const apiGet: any = async(_req = request, res = response) => {

    res.json({
        msg: 'apiGet : OK'
    });
}


export const apiPost: any = async(_req = request, res = response) => {

    res.json({
        msg: 'apiPost : OK'
    });
}


export const apiPut: any = async(_req = request, res = response) => {

    res.json({
        msg: 'apiPut : OK'
    });
}

export const apiDelete: any = async(_req = request, res = response) => {

    res.json({
        msg: 'apiDelete : OK'
    });
}
