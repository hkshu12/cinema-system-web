<template>
  <Card class="movieCard">
    <p slot="title" class="card-movieName">
      <Icon type="ios-film-outline" />&nbsp;{{movie.name}}
    </p>
    <p slot="extra">{{movie.likeNum}}
      <Icon type="ios-heart"
            color="red" />
    </p>
    <div class="card-content">
      <div class="card-content-poster">
        <img :src="movie.posterURL"
             height="150px"
             width="100px" />
      </div>
      <div class="card-content-divider">
      </div>
      <div class="card-content-moiveDetails">
        <p>导演：{{movie.directors}}</p>
        <p>主演：{{movie.actors}}</p>
        <p>简介：{{movie.introduction}}</p>
      </div>
    </div>
  </Card>
</template>

<style>
p {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.movieCard {
  margin-top: 10px;
  height: 250px;
  width: 800px;
  text-align: left;
}
.card-movieName {
  margin-left: 10px;
  font-size: 50px;
}
.card-content {
  display: flex;
  justify-content: space-around;
}
.card-content-divider {
  margin: 0 8px;
}
</style>

<script>
export default {
  data () {
    return {
      movie: {
        name: '三体',
        likeNum: 5,
        posterURL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554357005710&di=9e316b2c6c8f7daf398c4866bd3a321e&imgtype=0&src=http%3A%2F%2Fi2.hexunimg.cn%2F2016-07-28%2F185209547.jpg',
        directors: 'asd/dsa/asd',
        actors: 'fff/ccc',
        introduction: 'abcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdfbcdefgsdvffffffffffffffffffffffffffffsdf'
      }
    }
  }
}
</script>
