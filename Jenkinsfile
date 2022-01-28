pipeline {
  agent any
  stages {
    stage('Push images') {
      steps {
        script {
        withCredentials([usernamePassword(credentialsId: 'docker_auth', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
          sh """
              docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
              docker build -t "moatazxz/test":latest .
              docker push "moatazxz/test":latest
          """
        }
        
      }
      }
    }
    stage('deploy') {
        steps {
            echo "done"
        }
        
    }
 
  }
  
}

