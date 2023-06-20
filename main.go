package main

import (
	"fmt"
	"log"
	"os"
	"strings"
)

const FLAG_USE_CIRCLE_LOGO = true

func main() {
	const srcDir = "./resource/logo-circle/"
	const distDir = "./output/"
	os.MkdirAll(distDir, os.ModePerm)

	files, err := os.ReadDir(srcDir)
	if err != nil {
		log.Fatalln(err)
	}

	for _, file := range files {
		if !file.IsDir() && strings.HasSuffix(strings.ToLower(file.Name()), ".svg") {
			fileName := strings.Split(file.Name(), ".")[0]
			alias := strings.Split(fileName, " ")[0]

			if len(alias) == 0 {
				fmt.Println(file.Name(), fileName)
			} else {
				buf, err := os.ReadFile(srcDir + file.Name())
				if err != nil {
					fmt.Println("read origin logo file failed")
					log.Fatalln(err)
				}

				fileName := strings.ToUpper(alias) + ".svg"
				if len(fileName) > 4 {
					os.WriteFile(distDir+fileName, buf, os.ModePerm)
				} else {
					log.Fatalln("file name is empty", file.Name())
				}
			}
		}
	}
}
