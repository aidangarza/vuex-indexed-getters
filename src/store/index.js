import Vue from 'vue'
import Vuex from 'vuex'
// Functions
import doIndexify from './functions/indexify'
import doExpandify from './functions/expandify'

const indexify = (type, list, prop) => {
  const t0 = performance.now()
  const output = doIndexify(type, list, prop)
  const t1 = performance.now()
  console.log(`indexify - ${type}: time = ${t1 - t0}`)
  return output
}

const expandify = (type, prop, map, list) => {
  const t0 = performance.now()
  const output = doExpandify(type, prop, map, list)
  const t1 = performance.now()
  console.log(`expandify - ${type}: time = ${t1 - t0}`)
  return output
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountId: 'r17WseDHA22DW',
    r17WseDHA22DW: [
      { id: 1, name: 'item 1', group: '1' },
      { id: 2, name: 'item 2', group: '2' },
      { id: 3, name: 'item 3', group: '3' },
      { id: 4, name: 'item 4', group: '4' },
      { id: 5, name: 'item 5', group: '5' },
      { id: 6, name: 'item 6', group: '6' },
      { id: 7, name: 'item 7', group: '7' },
      { id: 8, name: 'item 8', group: '8' },
      { id: 9, name: 'item 9', group: '9' },
      { id: 10, name: 'item 10', group: '1' },
      { id: 11, name: 'item 11', group: '1' },
      { id: 12, name: 'item 12', group: '1' },
      { id: 13, name: 'item 13', group: '1' },
      { id: 14, name: 'item 14', group: '1' },
      { id: 15, name: 'item 15', group: '1' },
      { id: 16, name: 'item 16', group: '1' },
      { id: 17, name: 'item 17', group: '1' },
      { id: 18, name: 'item 18', group: '1' },
      { id: 19, name: 'item 19', group: '1' },
      { id: 20, name: 'item 20', group: '2' },
      { id: 21, name: 'item 21', group: '2' },
      { id: 22, name: 'item 22', group: '2' },
      { id: 23, name: 'item 23', group: '2' },
      { id: 24, name: 'item 24', group: '2' },
      { id: 25, name: 'item 25', group: '2' },
      { id: 26, name: 'item 26', group: '2' },
      { id: 27, name: 'item 27', group: '2' },
      { id: 28, name: 'item 28', group: '2' },
      { id: 29, name: 'item 29', group: '2' },
      { id: 30, name: 'item 30', group: '3' },
      { id: 31, name: 'item 31', group: '3' },
      { id: 32, name: 'item 32', group: '3' },
      { id: 33, name: 'item 33', group: '3' },
      { id: 34, name: 'item 34', group: '3' },
      { id: 35, name: 'item 35', group: '3' },
      { id: 36, name: 'item 36', group: '3' },
      { id: 37, name: 'item 37', group: '3' },
      { id: 38, name: 'item 38', group: '3' },
      { id: 39, name: 'item 39', group: '3' },
      { id: 40, name: 'item 40', group: '4' },
      { id: 41, name: 'item 41', group: '4' },
      { id: 42, name: 'item 42', group: '4' },
      { id: 43, name: 'item 43', group: '4' },
      { id: 44, name: 'item 44', group: '4' },
      { id: 45, name: 'item 45', group: '4' },
      { id: 46, name: 'item 46', group: '4' },
      { id: 47, name: 'item 47', group: '4' },
      { id: 48, name: 'item 48', group: '4' },
      { id: 49, name: 'item 49', group: '4' },
      { id: 50, name: 'item 50', group: '5' },
      { id: 51, name: 'item 51', group: '5' },
      { id: 52, name: 'item 52', group: '5' },
      { id: 53, name: 'item 53', group: '5' },
      { id: 54, name: 'item 54', group: '5' },
      { id: 55, name: 'item 55', group: '5' },
      { id: 56, name: 'item 56', group: '5' },
      { id: 57, name: 'item 57', group: '5' },
      { id: 58, name: 'item 58', group: '5' },
      { id: 59, name: 'item 59', group: '5' },
      { id: 60, name: 'item 60', group: '6' },
      { id: 61, name: 'item 61', group: '6' },
      { id: 62, name: 'item 62', group: '6' },
      { id: 63, name: 'item 63', group: '6' },
      { id: 64, name: 'item 64', group: '6' },
      { id: 65, name: 'item 65', group: '6' },
      { id: 66, name: 'item 66', group: '6' },
      { id: 67, name: 'item 67', group: '6' },
      { id: 68, name: 'item 68', group: '6' },
      { id: 69, name: 'item 69', group: '6' },
      { id: 70, name: 'item 70', group: '7' },
      { id: 71, name: 'item 71', group: '7' },
      { id: 72, name: 'item 72', group: '7' },
      { id: 73, name: 'item 73', group: '7' },
      { id: 74, name: 'item 74', group: '7' },
      { id: 75, name: 'item 75', group: '7' },
      { id: 76, name: 'item 76', group: '7' },
      { id: 77, name: 'item 77', group: '7' },
      { id: 78, name: 'item 78', group: '7' },
      { id: 79, name: 'item 79', group: '7' },
      { id: 80, name: 'item 80', group: '8' },
      { id: 81, name: 'item 81', group: '8' },
      { id: 82, name: 'item 82', group: '8' },
      { id: 83, name: 'item 83', group: '8' },
      { id: 84, name: 'item 84', group: '8' },
      { id: 85, name: 'item 85', group: '8' },
      { id: 86, name: 'item 86', group: '8' },
      { id: 87, name: 'item 87', group: '8' },
      { id: 88, name: 'item 88', group: '8' },
      { id: 89, name: 'item 89', group: '8' },
      { id: 90, name: 'item 90', group: '9' },
      { id: 91, name: 'item 91', group: '9' },
      { id: 92, name: 'item 92', group: '9' },
      { id: 93, name: 'item 93', group: '9' },
      { id: 94, name: 'item 94', group: '9' },
      { id: 95, name: 'item 95', group: '9' },
      { id: 96, name: 'item 96', group: '9' },
      { id: 97, name: 'item 97', group: '9' },
      { id: 98, name: 'item 98', group: '9' },
      { id: 99, name: 'item 99', group: '9' },
      { id: 100, name: 'item 100', group: '1' },
      { id: 101, name: 'item 101', group: '1' },
      { id: 102, name: 'item 102', group: '1' },
      { id: 103, name: 'item 103', group: '1' },
      { id: 104, name: 'item 104', group: '1' },
      { id: 105, name: 'item 105', group: '1' },
      { id: 106, name: 'item 106', group: '1' },
      { id: 107, name: 'item 107', group: '1' },
      { id: 108, name: 'item 108', group: '1' },
      { id: 109, name: 'item 109', group: '1' },
      { id: 110, name: 'item 110', group: '1' },
      { id: 111, name: 'item 111', group: '1' },
      { id: 112, name: 'item 112', group: '1' },
      { id: 113, name: 'item 113', group: '1' },
      { id: 114, name: 'item 114', group: '1' },
      { id: 115, name: 'item 115', group: '1' },
      { id: 116, name: 'item 116', group: '1' },
      { id: 117, name: 'item 117', group: '1' },
      { id: 118, name: 'item 118', group: '1' },
      { id: 119, name: 'item 119', group: '1' },
      { id: 120, name: 'item 120', group: '1' },
      { id: 121, name: 'item 121', group: '1' },
      { id: 122, name: 'item 122', group: '1' },
      { id: 123, name: 'item 123', group: '1' },
      { id: 124, name: 'item 124', group: '1' },
      { id: 125, name: 'item 125', group: '1' },
      { id: 126, name: 'item 126', group: '1' },
      { id: 127, name: 'item 127', group: '1' },
      { id: 128, name: 'item 128', group: '1' },
      { id: 129, name: 'item 129', group: '1' },
      { id: 130, name: 'item 130', group: '1' },
      { id: 131, name: 'item 131', group: '1' },
      { id: 132, name: 'item 132', group: '1' },
      { id: 133, name: 'item 133', group: '1' },
      { id: 134, name: 'item 134', group: '1' },
      { id: 135, name: 'item 135', group: '1' },
      { id: 136, name: 'item 136', group: '1' },
      { id: 137, name: 'item 137', group: '1' },
      { id: 138, name: 'item 138', group: '1' },
      { id: 139, name: 'item 139', group: '1' },
      { id: 140, name: 'item 140', group: '1' },
      { id: 141, name: 'item 141', group: '1' },
      { id: 142, name: 'item 142', group: '1' },
      { id: 143, name: 'item 143', group: '1' },
      { id: 144, name: 'item 144', group: '1' },
      { id: 145, name: 'item 145', group: '1' },
      { id: 146, name: 'item 146', group: '1' },
      { id: 147, name: 'item 147', group: '1' },
      { id: 148, name: 'item 148', group: '1' },
      { id: 149, name: 'item 149', group: '1' },
      { id: 150, name: 'item 150', group: '1' },
      { id: 151, name: 'item 151', group: '1' },
      { id: 152, name: 'item 152', group: '1' },
      { id: 153, name: 'item 153', group: '1' },
      { id: 154, name: 'item 154', group: '1' },
      { id: 155, name: 'item 155', group: '1' },
      { id: 156, name: 'item 156', group: '1' },
      { id: 157, name: 'item 157', group: '1' },
      { id: 158, name: 'item 158', group: '1' },
      { id: 159, name: 'item 159', group: '1' },
      { id: 160, name: 'item 161', group: '1' },
      { id: 161, name: 'item 161', group: '1' },
      { id: 163, name: 'item 163', group: '1' },
      { id: 164, name: 'item 164', group: '1' },
      { id: 165, name: 'item 165', group: '1' },
      { id: 166, name: 'item 166', group: '1' },
      { id: 167, name: 'item 167', group: '1' },
      { id: 168, name: 'item 168', group: '1' },
      { id: 169, name: 'item 169', group: '1' },
      { id: 170, name: 'item 170', group: '1' },
      { id: 171, name: 'item 171', group: '1' },
      { id: 172, name: 'item 172', group: '1' },
      { id: 173, name: 'item 173', group: '1' },
      { id: 174, name: 'item 174', group: '1' },
      { id: 175, name: 'item 175', group: '1' },
      { id: 176, name: 'item 176', group: '1' },
      { id: 177, name: 'item 177', group: '1' },
      { id: 178, name: 'item 178', group: '1' },
      { id: 179, name: 'item 179', group: '1' },
      { id: 180, name: 'item 180', group: '1' },
      { id: 181, name: 'item 181', group: '1' },
      { id: 182, name: 'item 182', group: '1' },
      { id: 183, name: 'item 183', group: '1' },
      { id: 184, name: 'item 184', group: '1' },
      { id: 185, name: 'item 185', group: '1' },
      { id: 186, name: 'item 186', group: '1' },
      { id: 187, name: 'item 187', group: '1' },
      { id: 188, name: 'item 188', group: '1' },
      { id: 189, name: 'item 189', group: '1' },
      { id: 190, name: 'item 190', group: '1' },
      { id: 191, name: 'item 191', group: '1' },
      { id: 192, name: 'item 192', group: '1' },
      { id: 193, name: 'item 193', group: '1' },
      { id: 194, name: 'item 194', group: '1' },
      { id: 195, name: 'item 195', group: '1' },
      { id: 196, name: 'item 196', group: '1' },
      { id: 197, name: 'item 197', group: '1' },
      { id: 198, name: 'item 198', group: '1' },
      { id: 199, name: 'item 199', group: '1' },
      { id: 200, name: 'item 200', group: '2' },
      { id: 201, name: 'item 201', group: '2' },
      { id: 202, name: 'item 202', group: '2' },
      { id: 203, name: 'item 203', group: '2' },
      { id: 204, name: 'item 204', group: '2' },
      { id: 205, name: 'item 205', group: '2' },
      { id: 206, name: 'item 206', group: '2' },
      { id: 207, name: 'item 207', group: '2' },
      { id: 208, name: 'item 208', group: '2' },
      { id: 209, name: 'item 209', group: '2' },
      { id: 210, name: 'item 210', group: '2' },
      { id: 211, name: 'item 211', group: '2' },
      { id: 212, name: 'item 212', group: '2' },
      { id: 213, name: 'item 213', group: '2' },
      { id: 214, name: 'item 214', group: '2' },
      { id: 215, name: 'item 215', group: '2' },
      { id: 216, name: 'item 216', group: '2' },
      { id: 217, name: 'item 217', group: '2' },
      { id: 218, name: 'item 218', group: '2' },
      { id: 219, name: 'item 219', group: '2' },
      { id: 220, name: 'item 220', group: '2' },
      { id: 221, name: 'item 221', group: '2' },
      { id: 222, name: 'item 222', group: '2' },
      { id: 223, name: 'item 223', group: '2' },
      { id: 224, name: 'item 224', group: '2' },
      { id: 225, name: 'item 225', group: '2' },
      { id: 226, name: 'item 226', group: '2' },
      { id: 227, name: 'item 227', group: '2' },
      { id: 228, name: 'item 228', group: '2' },
      { id: 229, name: 'item 229', group: '2' },
      { id: 230, name: 'item 230', group: '2' },
      { id: 231, name: 'item 231', group: '2' },
      { id: 232, name: 'item 232', group: '2' },
      { id: 233, name: 'item 233', group: '2' },
      { id: 234, name: 'item 234', group: '2' },
      { id: 235, name: 'item 235', group: '2' },
      { id: 236, name: 'item 236', group: '2' },
      { id: 237, name: 'item 237', group: '2' },
      { id: 238, name: 'item 238', group: '2' },
      { id: 239, name: 'item 239', group: '2' },
      { id: 240, name: 'item 240', group: '2' },
      { id: 241, name: 'item 241', group: '2' },
      { id: 242, name: 'item 242', group: '2' },
      { id: 243, name: 'item 243', group: '2' },
      { id: 244, name: 'item 244', group: '2' },
      { id: 245, name: 'item 245', group: '2' },
      { id: 246, name: 'item 246', group: '2' },
      { id: 247, name: 'item 247', group: '2' },
      { id: 248, name: 'item 248', group: '2' },
      { id: 249, name: 'item 249', group: '2' },
      { id: 250, name: 'item 250', group: '2' },
      { id: 251, name: 'item 251', group: '2' },
      { id: 252, name: 'item 252', group: '2' },
      { id: 253, name: 'item 253', group: '2' },
      { id: 254, name: 'item 254', group: '2' },
      { id: 255, name: 'item 255', group: '2' },
      { id: 256, name: 'item 256', group: '2' },
      { id: 257, name: 'item 257', group: '2' },
      { id: 258, name: 'item 258', group: '2' },
      { id: 259, name: 'item 259', group: '2' },
      { id: 260, name: 'item 261', group: '2' },
      { id: 261, name: 'item 261', group: '2' },
      { id: 263, name: 'item 263', group: '2' },
      { id: 264, name: 'item 264', group: '2' },
      { id: 265, name: 'item 265', group: '2' },
      { id: 266, name: 'item 266', group: '2' },
      { id: 267, name: 'item 267', group: '2' },
      { id: 268, name: 'item 268', group: '2' },
      { id: 269, name: 'item 269', group: '2' },
      { id: 270, name: 'item 270', group: '2' },
      { id: 271, name: 'item 271', group: '2' },
      { id: 272, name: 'item 272', group: '2' },
      { id: 273, name: 'item 273', group: '2' },
      { id: 274, name: 'item 274', group: '2' },
      { id: 275, name: 'item 275', group: '2' },
      { id: 276, name: 'item 276', group: '2' },
      { id: 277, name: 'item 277', group: '2' },
      { id: 278, name: 'item 278', group: '2' },
      { id: 279, name: 'item 279', group: '2' },
      { id: 280, name: 'item 280', group: '2' },
      { id: 281, name: 'item 281', group: '2' },
      { id: 282, name: 'item 282', group: '2' },
      { id: 283, name: 'item 283', group: '2' },
      { id: 284, name: 'item 284', group: '2' },
      { id: 285, name: 'item 285', group: '2' },
      { id: 286, name: 'item 286', group: '2' },
      { id: 287, name: 'item 287', group: '2' },
      { id: 288, name: 'item 288', group: '2' },
      { id: 289, name: 'item 289', group: '2' },
      { id: 290, name: 'item 290', group: '2' },
      { id: 291, name: 'item 291', group: '2' },
      { id: 292, name: 'item 292', group: '2' },
      { id: 293, name: 'item 293', group: '2' },
      { id: 294, name: 'item 294', group: '2' },
      { id: 295, name: 'item 295', group: '2' },
      { id: 296, name: 'item 296', group: '2' },
      { id: 297, name: 'item 297', group: '2' },
      { id: 298, name: 'item 298', group: '2' },
      { id: 299, name: 'item 299', group: '2' },
      { id: 300, name: 'item 300', group: '3' }
    ]
  },
  mutations: {
    SET_ACCOUNT_ID (state, accountId) {
      state.accountId = accountId
    }
  },
  actions: {

  },
  getters: {
    current: (state) => () => {
      return state[state.accountId] || []
    },
    indexedById: (state, getters) => {
      return indexify('key', getters.current(), 'id')
    },
    indexedByGroup: (state, getters) => {
      return indexify('group', getters.current(), 'group')
    },
    indexedByDigit: (state, getters) => {
      return indexify('tag', getters.current(), ({ id }) => id.toString().split(''))
    },
    byId: (state, getters) => (id) => {
      return expandify('key', id, getters.indexedById, getters.current())
    },
    byGroup: (state, getters) => (group) => {
      return expandify('list', group, getters.indexedByGroup, getters.current())
    },
    byDigit: (state, getters) => (digit) => {
      return expandify('list', digit, getters.indexedByDigit, getters.current())
    }
  }
})
