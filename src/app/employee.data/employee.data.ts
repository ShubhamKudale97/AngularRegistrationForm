import { Employee } from './employee.model';

export class EmpData {
    employee_list: Employee[] = 
    [
        {
            emp_id: 123,
            emp_name: " shubham Bhamare",
            emp_mob: 9874563214,
            emp_email: "bhamre@gmail.com",
            emp_adhar_number: "9685 7463 5241",
            emp_pan_number: "ASDFG7894A",
            emp_dob: "1998-12-15",
            emp_gender: "male",
            emp_marital_status: "single",
            emp_location: "manikbag",
            emp_password: "@ngbhamre",
            is_expandable:false,
        },

        {
            emp_id: 124,
            emp_name: "mahesh",
            emp_mob: 9874563222,
            emp_email: "mahesh@gmail.com",
            emp_adhar_number: "9685 7477 5241",
            emp_pan_number: "ASDFG7584A",
            emp_dob: "1998-01-15",
            emp_gender: "male",
            emp_marital_status: "married",
            emp_location: "karvenagar",
            emp_password: "maheshshet",
            is_expandable:false
        },

        {
            emp_id: 125,
            emp_name: "revati",
            emp_mob: 9874563288,
            emp_email: "revati@gmail.com",
            emp_adhar_number: "9685 7463 5278",
            emp_pan_number: "ASDFG2594A",
            emp_dob: "2001-06-10",
            emp_gender: "female",
            emp_marital_status: "single",
            emp_location: "solapur",
            emp_password: "sumokondru",
            is_expandable:false
        },

        {
            emp_id: 126,
            emp_name: "gauri",
            emp_mob: 9874567894,
            emp_email: "gauri@gmail.com",
            emp_adhar_number: "9677 7463 5851",
            emp_pan_number: "ASDFG7878A",
            emp_dob: "1990-06-15",
            emp_gender: "female",
            emp_marital_status: "married",
            emp_location: "pune city",
            emp_password: "gauritai",
            is_expandable:false
        },

        {
            emp_id: 127,
            emp_name: "abcd",
            emp_mob: 9874568894,
            emp_email: "abcd@gmail.com",
            emp_adhar_number: "9688 7463 5851",
            emp_pan_number: "ABCDG7878A",
            emp_dob: "1857-06-15",
            emp_gender: "other",
            emp_marital_status: "divorced",
            emp_location: " city",
            emp_password: "abcde",
            is_expandable:false
        }
    ]

    getDetailsById(id: number) {
        return this.employee_list.filter(e => e.emp_id === id);
    }
}