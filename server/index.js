/**
 * Created by zlvin on 2017/3/20.
 */
var express = require('express');
var router = express.Router();
var neteaseMusicApi = require('neteaseMusicApi')


module.exports = function (app) {

  //根据id获取歌曲信息
  app.get('/song', function (req, res) {
    var id = req.query.id
    neteaseMusicApi.song(id,function(data){
      res.json(data)
    })
  });

  //根据id获取歌词
  app.get('/lrc', function (req, res) {
    var id = req.query.id
    neteaseMusicApi.lrc(id,function(data){
      res.json(data)
    })
  });

  //search 搜索
  app.get('/search', function (req, res) {
    var name = req.query.name
    var limit = req.query.limit
    var offset = req.query.offset
    neteaseMusicApi.search(name,function(data){
      res.json(data)
    },limit,offset)
  });
  //playlists 根据id获取歌单
  app.get('/playlist', function (req, res) {
    var id = req.query.id
    neteaseMusicApi.playlists(id,function(data){
      res.json(data)
    })
  });
  //topPlaylists 热门歌单
  app.get('/topPlaylists', function (req, res) {
    var limit = req.query.limit
    neteaseMusicApi.topPlaylists(function(data){
      res.json(data)
    },limit)
  });
  //userPlaylists 用户歌单
  app.get('/userPlaylists', function (req, res) {
    var id = req.query.id
    neteaseMusicApi.userPlaylists(id,function(data){
      res.json(data)
    })
  });
  //私人FM
  app.get('/fm',function(req,res){
    neteaseMusicApi.fm(function (data) {
      res.json(data)
    })
  })
  //artistAlbums 根据歌手id专辑
  app.get('/artistAlbums',function (req,res) {
    var id = req.query.id
    var limit = req.query.limit
    var offset = req.query.offset
    neteaseMusicApi.artistAlbums(id,function (data) {
      res.json(data)
    },limit,offset)
  })
  //album 根据id获取专辑
  app.get('/album',function (req,res) {
    var id = req.query.id
    neteaseMusicApi.album(id,function (data) {
      res.json(data)
    })
  })
  //login 用户登陆
  app.post('/login',function (req,res) {
    var phone = req.query.phone
    var password = req.query.password
    var rememberLogin = req.query.rememberLogin
    neteaseMusicApi.login(phone,password,function (data) {
      res.json(data)
    },rememberLogin)
  })
  //newAlbum 新碟上架
  app.get('/newAlbum',function (req,res) {
    var limit = req.query.limit
    var offset = req.query.offset
    neteaseMusicApi.newAlbum(function (data) {
      res.json(data)
    },limit,offset)
  })
  //hotArtist 热门歌手
  app.get('/hotArtist',function (req,res) {
    var limit = req.query.limit
    var offset = req.query.offset
    neteaseMusicApi.hotArtist(function (data) {
      res.json(data)
    },limit,offset)
  })
  //comments热门评论
  app.get('/comments',function (req,res) {
    var id = req.query.id
    neteaseMusicApi.comments(id,function (data) {
      res.json(data)
    })
  })
};