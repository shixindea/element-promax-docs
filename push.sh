
git add .

git commit -m "update:$(date +%F%n%T)更新文档"

echo "😀😀😀 💨💨💨 commit成功"

git push && echo "😀😀😀 💨 Push 成功！" || echo "😭😭😭 💨 Push 失败！"
