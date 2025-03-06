// THIS IS A FAKE ASYNC STORAGE SERVICE FOR DEMO PURPOSES
// IT FORCES US TO WORK WITH PROMISES AND ASYNC OPERATIONS

export const asyncStorageMockService = {
  get,
  getById,
  post,
  postMany,
  put,
  remove,
};

async function get(entityType: string): Promise<any[]> {
  const delay = 500;
  const entities = JSON.parse(localStorage.getItem(entityType) || "[]");
  return new Promise((resolve) => setTimeout(() => resolve(entities), delay));
}

async function getById(entityType: string, entityId: string) {
  const entities = await get(entityType);
  const entity = entities.find((entity: any) => entity.id === entityId);

  if (!entity) {
    throw new Error(
      `Get failed, cannot find entity with id: ${entityId} in: ${entityType}`
    );
  }

  return entity;
}

async function post(entityType: string, newEntity: any) {
  const clonedEntity = structuredClone(newEntity);
  clonedEntity.id = makeId();
  clonedEntity.createdAt = Date.now();

  const entities = await get(entityType);
  entities.push(clonedEntity);
  localStorage.setItem(entityType, JSON.stringify(entities));

  return clonedEntity;
}

async function postMany(entityType: string, newEntities: any) {
  const clonedEntities = structuredClone(newEntities);
  const entities = await get(entityType);

  clonedEntities.forEach((entity: any) => {
    entity.id = makeId();
    entity.createdAt = Date.now();
    entities.push(entity);
  });

  localStorage.setItem(entityType, JSON.stringify(entities));
  return clonedEntities;
}

async function put(entityType: string, id: string, updatedEntity: any) {
  const clonedEntity = structuredClone(updatedEntity);
  const entities = await get(entityType);

  const idx = entities.findIndex((entity: any) => entity.id === id);
  if (idx < 0) {
    throw new Error(
      `Update failed, cannot find entity with id: ${id} in: ${entityType}`
    );
  }

  clonedEntity.updatedAt = Date.now();
  entities.splice(idx, 1, clonedEntity);

  localStorage.setItem(entityType, JSON.stringify(entities));
  return clonedEntity;
}

async function remove(entityType: string, entityId: string) {
  const entities = await get(entityType);
  const idx = entities.findIndex((entity: any) => entity.id === entityId);

  if (idx < 0) {
    throw new Error(
      `Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`
    );
  }

  entities.splice(idx, 1);
  localStorage.setItem(entityType, JSON.stringify(entities));
}

function makeId() {
  return "_" + Math.random().toString(36).substring(2, 15);
}
