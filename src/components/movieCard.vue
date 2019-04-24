<template>
  <Card class="movieCard">
    <p slot="title"
       class="movieCard-movieName">
      <Icon type="ios-film-outline" />&nbsp;{{movie.name}}<Icon type="ios-arrow-forward" />
    </p>
    <p slot="extra">{{movie.likeNum}}
      <Icon type="ios-heart"
            color="red" />
    </p>
    <div class="movieCard-content">
      <div class="movieCard-content-poster">
        <img :src="movie.posterURL"
             height="150px"
             width="100px" />
      </div>
      <div class="movieCard-content-movieInfo">
        <p>导演：{{movie.directors}}</p>
        <p>主演：{{movie.actors}}</p>
        <p>简介：{{movie.introduction}}</p>
      </div>
      <router-link style="float:right"
                   to='movie'>查看详情</router-link>
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
.movieCard-movieName {
  margin-left: 10px;
  font-size: 50px;
}
.movieCard-content {
  position: relative;
}
.movieCard-content-poster {
  float: left;
}
.movieCard-content-movieInfo {
  float: left;
  width: 600px;
  padding-left: 16px;
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
        introduction: '-comcomcomhttps://tdffds爱的色放答复是1人的身份3让大叔23当时的3房贷首付3对方是否3多少钱的ef'
      }
    }
  }
}
</script>
