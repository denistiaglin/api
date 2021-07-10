
export const updateAt = async (doc: any) => {
  await doc.update({}, { updateAt: new Date() })
}
