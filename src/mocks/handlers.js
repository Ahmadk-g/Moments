import { rest } from "msw";

const baseURL = 'https://drf--api-87b91537f33e.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res
            (ctx.json({
                "pk": 2,
                "username": "khalaf",
                "email": "",
                "first_name": "",
                "last_name": "",
                "profile_id": 2,
                "profile_image": "https://res.cloudinary.com/ds8x1i3zm/image/upload/v1/media/images/pexels-jakub-zerdzicki-19149826_qsznv3"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];