/*
 *  Copyright 2021-2024 Disney Streaming
 *
 *  Licensed under the Tomorrow Open Source Technology License, Version 1.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     https://disneystreaming.github.io/TOST-1.0.txt
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package smithy4s.schema

case class StreamingSchema[A] private (fieldName: String, schema: Schema[A]) {
  def withFieldName(value: String): StreamingSchema[A] = {
    copy(fieldName = value)
  }

  def withSchema(value: Schema[A]): StreamingSchema[A] = {
    copy(schema = value)
  }

}

object StreamingSchema {
  @scala.annotation.nowarn(
    "msg=private method unapply in object StreamingSchema is never used"
  )
  private def unapply[A](c: StreamingSchema[A]): Option[StreamingSchema[A]] =
    Some(
      c
    )
  def apply[A](fieldName: String, schema: Schema[A]): StreamingSchema[A] = {
    new StreamingSchema(fieldName, schema)
  }
}
