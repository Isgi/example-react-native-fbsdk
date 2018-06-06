import { store } from '../utils/store';

export function create() {
  const { company, user } = store.getState().settings;
  return {
    companyId: company.id,
    createdBy: user.id,
    updatedBy: user.id
  }
}

export function update() {
  const { company, user } = store.getState().settings;
  return {
    companyId: company.id,
    updatedBy: user.id
  }
}

export function find() {
  const { company } = store.getState().settings;
  return {
    companyId: company.id
  }
}
