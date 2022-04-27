class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  # def new
  # end

  def create
    post = Post.create(content: params[:content])
    render json:{ post: post }   #保存するデータをJSでも使えるようにしている{JSで使う変数：１１行目の変数}
  end
end
