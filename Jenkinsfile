pipeline {
    // master executor should be set to 0
    agent any
    stages {
        stage('Build') {
            steps {
                //sh
                //bat "mvn clean package -DskipTests"
                bat "npm install"
            }
        }
        stage('Build Image') {
            steps {
                //sh
                bat "docker build -t='wdio/asos' ."
            }
        }
        stage('Push Image') {
            steps {
			    withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'Loadrunner_1', usernameVariable: 'amitbhabra')]) {
                    //sh
			        bat "docker login --username=${user} --password=${pass}"
			        bat "docker push wdio/asos:latest"
			    }                           
            }
        }
    }
}