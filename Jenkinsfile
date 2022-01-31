pipeline {
  agent {label 'slave1'}
stages {

      stage('Push images') {
      steps {
        script {
        withCredentials([usernamePassword(credentialsId: 'docker_auth', usernameVariable: 'DOCKER_USERNAME' , passwordVariable: 'DOCKER_PASSWORD')]) {
          sh """
              docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
              docker build -t "moatazxz/testj":latest .
              docker push "moatazxz/testj":latest
          """

        }
        
      }
      }
    }

          stage('export_serivce_acc') {
            steps {
              script {
              withCredentials([file(credentialsId: 'sv_acc', variable: 'SERVICE_ACC')]) {
                sh """
                export GOOGLE_APPLICATION_CREDENTIALS=$SERVICE_ACC
                """
              }
              
            }
            }
          }
          stage('Use_kube_confing') {
            steps {
              script {
              withCredentials([file(credentialsId: 'k8s_config', variable: 'KUBE_CONF')]) {
              sh """
                cat $KUBE_CONF > $HOME/.kube/config
                kubectl get pod --kubeconfig=$KUBE_CONF
              """
              }
              
            }
            }
          }

  }

}