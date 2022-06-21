const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData)
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  // TODO: path parameter id를 가진 discussion을 응답합니다.
  findById: (req, res) => {
    const id = Number(req.params.id);
    let index = 0;
    for(let el of discussionsData) {
      if (el.id === id) {
        index = id
        break;
      };
    }
    if (index === 0) return res.status(404).end();
    const [ list ] = discussionsData.filter((item) => item.id === id);
    return res.status(200).json(list);
  },

  createOne: (req, res) => {
    return res.status(200).json(discussionsData)
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    return res.status(200).json(discussionsData)
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    return res.status(200).json(discussionsData)
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
