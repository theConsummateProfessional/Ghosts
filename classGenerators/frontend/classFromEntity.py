import json
import argparse
import os

input_file = open('classGenerators/frontend/generations/Entities.json')

json_data = json.load(input_file)
for directory in json_data:
    if(not os.path.exists("frontend/src/utils/classes/" + directory)):
        os.makedirs("frontend/src/utils/classes/" + directory)
    for data in json_data[directory]:
        if(not os.path.exists("frontend/src/utils/classes/" + directory + "/" + data["type"] + ".ts")):
            generatedFile = """import {Entity} from "../entity";

class """ + data['type'] + """ implements Entity {
    type: string;
    health: number;
    damageDealt: number;
    movementSpeed: number;

    constructor() {
        this.type = """ + "\"" + data['type'] + "\"" + """;
        this.health = """ + str(data['health']) + """;
        this.damageDealt = """ + str(data['damageDealt']) + """;
        this.movementSpeed = """ + str(data['movementSpeed']) + """;
    }

    decrementHealth(hitPoints: number) {
        this.health -= hitPoints;
    }
}
            """
            file = open("frontend/src/utils/classes/" + directory + "/" + data["type"] + ".ts", "w")
            file.write(generatedFile)
            file.close()