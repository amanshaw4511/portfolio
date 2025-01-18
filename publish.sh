rm -rf build
pnpm run build
rm amansaw.com.zip
zip -r amansaw.com.zip dist
scp amansaw.com.zip aman@racknerd:~/amansaw.com/
