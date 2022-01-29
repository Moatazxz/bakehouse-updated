pipeline {
  agent any
  stages {
    stage('Push images') {
      steps {
        script {
        withCredentials([usernamePassword(credentialsId: 'docker_auth', usernameVariable: 'DOCKER_USERNAME' , passwordVariable: 'DOCKER_PASSWORD')]) {
          sh """
              docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
              docker build -t "moatazxz/testj:latest .
              docker push "moatazxz/testj":latest
              kubctl apply -f .
          """

        }
        
      }
      }
    }
 
  }
  
}

