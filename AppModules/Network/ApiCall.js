import axios from 'axios';

export const APIcall = {
    takeAwayList: PostCode => {
        axios
            .post(
                'https://qa-api.t2scdn.com/foodhub/takeaway/list?api_token=99b8ad5d2f9e80889efcd73bc31f7e7b',
                {
                    postcode :'AA1 1AA'
                }
            )
            .then((response) => console.log(response))
            .catch();
    },
};
