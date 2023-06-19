package main

import (
	"fmt"
	"log"
	"os"
	"strings"
)

func main() {

	const srcDir = "./resource/logo/"
	const distDir = "./output/"
	os.MkdirAll(distDir, os.ModePerm)

	files, err := os.ReadDir(srcDir)
	if err != nil {
		log.Fatalln(err)
	}

	for _, file := range files {
		if !file.IsDir() && strings.HasSuffix(strings.ToLower(file.Name()), ".svg") {
			arr := strings.Split(file.Name(), " ")[1:]
			if len(arr) > 1 {
				fmt.Println(file.Name(), arr)
			} else {
				buf, err := os.ReadFile(srcDir + file.Name())
				if err != nil {
					fmt.Println("read origin logo file failed")
					log.Fatalln(err)
				}

				fileName := strings.ToUpper(strings.Split(strings.Join(arr, ""), ".")[0]) + ".svg"
				if len(fileName) > 4 {
					os.WriteFile(distDir+fileName, buf, os.ModePerm)
				} else {
					log.Fatalln("file name is empty", file.Name())
				}
			}
		}
	}

}
