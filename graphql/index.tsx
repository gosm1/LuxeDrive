import { gql, request } from 'graphql-request'

const URL = "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clzzksu6c02uy08vytcibs7vp/master"

export const getCarList = async () => {
    const document = gql`
        query Cars {
            cars{
                carName
                carType
                carPrice
                carImage {
                    url
                }
                carBrand
            }
        }
            `
    
    const results = await request(URL,document)
    return results
}

export const getStoreLocation = async () => {
    const document = gql `
        query MyQuery {
            storeLocations {
                address
            }
        }
    `
    const results = await request(URL,document)
    return results
}

export const createBooking =  async (formValue:any) => {
    const mutationQuery = gql`
        mutation MyMutation {
            createClientsBooking(
                data: {
                    contactNumber: "`+formValue.contactNumber+`", 
                    dropOffDate: "`+formValue.dropOffDate+`", 
                    dropOffTime: "`+formValue.dropOffTime+`", 
                    pickUpDate: "`+formValue.pickUpDate+`", 
                    pickUpLocation: "`+formValue.pickUpLocation+`", 
                    pickUpTime: "`+formValue.pickUpTime+`",
                    fullName: "`+formValue.fullName+`",
                }
            ) 
            {
                id
            } 
        }
    `

    try {
        const response = await request(URL, mutationQuery);
        return response;
    } catch (error) {
        console.error("Error creating booking:", error);
        throw error;
    }
};