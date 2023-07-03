#!/bin/bash
echo -n "Enter Folder Name : "
read name

mkdir $name
cd $name

touch $name.jsx
touch $name.css

v=$(cat <<EOF
import "./$name.css"

const $name = () => {
  return (
    <div id="$name">
        $name
    </div>
  )
}

export default $name;
EOF
)

echo -e $v > $name.jsx