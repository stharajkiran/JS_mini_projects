# echo "Current directory before change:"
# pwd
# folder="4_stopwatch"


# $1 is the first argument passed to the script
mkdir -p "$1" || { echo "Failed to create directory $1"; exit 1; }

# Change to a specific directory
cd "$1" || { echo "Directory $folder does not exist."; exit 1; }
echo "Current directory after change:"
pwd

# Create multiple files
touch main.html styles.css index.js

echo "Files created: main.html, styles.css, index.js in directory $1"