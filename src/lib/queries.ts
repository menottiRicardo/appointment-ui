import { gql } from "@apollo/client";

const getAppointments = gql`
  query fetchByPlaca($placa: String!) {
    appointments(placa: $placa) {
      id
      placa
      date
      status
    }
  }
`;

const createAppointment = gql`
  mutation Mutation($createAppointmentInput: CreateAppointmentInput!) {
    createAppointment(createAppointmentInput: $createAppointmentInput) {
      id
      placa
      date
    }
  }
`;

export { getAppointments, createAppointment };
